import { CiMenuKebab } from 'react-icons/ci'
import Badge from './Badge'
import { useState } from 'react'
import Line from "../components/Line";
import Copy from './Copy';
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

function Card() {
    const [showdrop, setShowDrop] = useState(false)
    const [deviceStatus, setDeviceStatus] = useState('offline')


    // DropDown prime 

    const menuLeft = useRef<Menu>(null);
    const menuRight = useRef<Menu>(null);
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Scan',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-upload'
                },
                {
                    label: 'Info',
                    icon: 'pi pi-upload'
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
    return (
        <>
            <div className={`bg-white w-[60%] mt-6 flex items-center justify-center gap-8 border-4 p-1 rounded-[9px] ${getOuterBorderColor()}`}>
                <div className={`w-full p-6 bg-gray-300 rounded-lg border ${getGradientBackground()}`}>
                    <div className='flex  justify-between items-center gap-4'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-2xl'>Device Name</h1>
                            <div>
                                <Badge value={deviceStatus} color={deviceStatus === 'offline' ? 'red' : 'green'} />
                            </div>
                        </div>
                        <div className='relative'>
                            <div className="card flex justify-content-center">
                                <Toast ref={toast}></Toast>
                                <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                                <Button label="" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
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
        </>

    )
}

export default Card
