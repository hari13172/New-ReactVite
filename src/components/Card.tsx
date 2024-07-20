import Badge from './Badge'
import { useEffect, useState } from 'react'
import Line from "../components/Line";
import Copy from './Copy';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import qr from "../../public/images/qr copy.png"

interface DownloadItem {
    title?: string;
    title1?: string;
    des1?: string;
    des2?: string;
    des3?: string;
    des4?: string;
    des5?: string;
    des6?: string;
}

const Card: React.FC = () => {
    const [showdrop, setShowDrop] = useState(false)
    const [deviceStatus, setDeviceStatus] = useState('offline')
    const [showScanPopup, setShowScanPopup] = useState(false);
    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const popupRef = useRef(null);


    //Downloading Script For Text File
    const downloadTextFile = () => {
        setLoading(true);

        // Prepare content to be downloaded (assuming `download` array structure)
        const content = download.map(a => `${a.title}\n${a.des1}\n${a.des2}\n${a.title1}\n${a.des3}\n${a.des4}\n${a.des5}\n${a.des6}`).join('\n\n');

        // Create a Blob with the content
        const blob = new Blob([content], { type: 'text/plain' });

        // Create a temporary URL to the Blob
        const url = URL.createObjectURL(blob);

        // Create a temporary <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'download.txt';

        // Append the <a> element to the document and trigger the click event
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setLoading(false);
    };



    // Loading effect for button
    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    // DropDown prime 
    const menuRight = useRef<Menu>(null);
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Scan',
                    icon: 'pi pi-qrcode',
                    command: () => setShowScanPopup(true)
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash'
                },
                {
                    label: 'Info',
                    icon: 'pi pi-info-circle',
                    command: () => setShowInfoPopup(true)

                }
            ]
        }
    ];


    const getDeviceBorder = () => {
        return deviceStatus === "offline" ? "border-red-500" : "border-green-800"
    }

    const getGradientBackground = () => {
        return deviceStatus === 'offline' ? 'bg-gradient-to-br from-red-300 to-red-100' : 'bg-gradient-to-br from-green-300 to-green-100';
    };

    const getOuterBorderColor = () => {
        return deviceStatus === 'offline' ? 'border-red-400' : 'border-green-200';
    };

    const handleDrop = () => {
        setShowDrop(!showdrop)
    }

    const handleClick = () => {
        setDeviceStatus(prevstatus => prevstatus === 'offline' ? "online" : 'offline')
    }

    const handleClosePopup = () => {
        setShowScanPopup(false)
    }

    const handleInfoPopup = () => {
        setShowInfoPopup(false)
    }

    //when i click outside the box this script helps
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            setShowInfoPopup(false);
            setShowScanPopup(false)

        }
    };
    return (
        <>
            <div className={`bg-white w-[60%] mt-6 flex items-center justify-center gap-8 border-4 p-1 rounded-[9px] ${getOuterBorderColor()} ref={cardRef}`}>
                <div className={`w-full p-6 bg-gray-300 rounded-lg border ${getGradientBackground()}`}>
                    <div className='flex  justify-between items-center gap-4'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-2xl'>Device Name</h1>
                            <div>
                                <Badge value={deviceStatus} color={deviceStatus === 'offline' ? 'red' : 'green'} />
                            </div>
                        </div>
                        <div className='relative'>
                            <div className="card flex justify-center items-center">
                                <Toast ref={toast}></Toast>
                                <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                                <Button icon="pi pi-ellipsis-v" className=" border-transparent bg-transparent " onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" pt={{
                                    icon() {
                                        return "text-black text-xl"
                                    }
                                }} />
                            </div>

                            {showdrop && (
                                <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg py-2'>
                                    <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'>Scan</button>
                                    <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'>Delete</button>
                                    <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'>Info</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-3 '>
                        <div className=''>
                            <h1 className='text-3xl text-white'>IP Address</h1>
                            <div className='flex justify-between items-center'>
                                <span className='text-gray-50'>172.0.0.1</span>
                                <Copy text='172.0.0.1' />
                            </div>
                        </div>
                        <div className='flex gap-12'>
                            <div className='flex flex-col'>
                                <h1 className='text-2xl text-white'>Endpoint</h1>
                                <span>103.78.167.103</span>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-2xl text-white'>Latest Handshake</h1>
                                <span className='text-center'>IO</span>
                            </div>
                        </div>
                    </div>

                    <Line />
                </div>
            </div>

            <button onClick={handleClick} className='border-2'>Toggle</button>

            {/* Scan popup */}
            {showScanPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={handleOverlayClick}>
                    <div ref={popupRef} className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold mb-4">Scan Qr to connect our vpn using wireguard applicatiion</h2>
                        <img src={qr} alt="" className='w-[300px] h-[300px] text-center' />
                        <p>Click The Download Button To Download Your Configurations &
                            Import It As Your Convinence</p>
                        <button onClick={handleClosePopup} className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showInfoPopup && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 backdrop-blur-md ' onClick={handleOverlayClick}>
                    <div ref={popupRef} className='bg-white p-6 rounded-lg shadow-md '>
                        <div className='flex justify-end '>
                            <button className='text-gray-500 hover:text-gray-800 focus:outline-none' onClick={handleInfoPopup}>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-xl font-semibold'>configuration File</h1>
                        </div>
                        <div className='bg-gray-300 shadow-2xl  rounded-lg p-4 mt-2'>
                            {download.map((a, index) => (
                                <div key={index}>
                                    <div>
                                        <h1 className='text-lg'>{a.title}</h1>
                                        <span className='text-lg'>{a.des1}</span>
                                        <span className='text-lg'>{a.des2}</span>
                                        <h1 className='text-lg'>{a.title1}</h1>
                                    </div>
                                    <div>
                                        <span className='text-lg'>{a.des3}</span>
                                        <h3 className='text-lg'> {a.des4}</h3>
                                        <h3 className='text-lg'>{a.des5}</h3>
                                        <h3 className='text-lg'>{a.des6}</h3>
                                    </div>
                                </div>
                            ))}
                            <div className='flex justify-center items-center mt-4'>
                                <Button label="Download" icon="pi pi-download" loading={loading} onClick={downloadTextFile} />
                            </div>
                        </div>
                        <h5 className=' text-lg pl-2 mt-4'>Click The Download Button To Download Your Configurations &
                            Import It As Your Convinence</h5>
                    </div>
                </div>
            )}
        </>

    )
}

export default Card;




// Example download data
const download: DownloadItem[] = [
    {
        title: '[interface]',
        des1: 'Address = 172.20.0.73/32',
        des2: 'PrivateKey = 0ERlAVXUmzWjcBdF7EYkdl/hXTD01nWo+jGUjb9Iekk='
    },
    {
        title1: '[Peer]',
        des3: 'PublicKey = cd7KOxX1rKD4GtozZkEs3dnpWQbxFXUINHNKY9Lm+Ao=',
        des4: 'Endpoint = youngstorage.in:51820',
        des5: 'AllowedIPs = 172.20.0.0/16',
        des6: 'PersistentKeepalive = 5'
    }
];
