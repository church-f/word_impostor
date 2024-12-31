import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { useTranslation } from "react-i18next";
import Divider from '@mui/material/Divider';
import { Turn as Hamburger } from 'hamburger-react'
import It from '../../public/bandiere/it.png'
import En from '../../public/bandiere/en.png'
import Pt from '../../public/bandiere/pt.png'
import Select from '@mui/material/Select';

export default function PositionedMenu() {
    const { t, i18n } = useTranslation()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [selectedLen, setSelectedLen] = React.useState(i18n.resolvedLanguage)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const allLen = [
        {
            label: "Italy",
            src: It,
            value: 'it'
        },
        {
            label: "Uk/Us",
            src: En,
            value: 'en'
        },
        {
            label: "Uk/Us",
            src: Pt,
            value: 'pt'
        }
    ]

    return (
        <div>
            <IconButton
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            <Hamburger size={20} onToggle={(val)=>{setAnchorEl(val)}} toggled={anchorEl}/>
                {/* <MenuIcon /> */}
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // anchorOrigin={{
                //     vertical: 'top',
                //     horizontal: 'left',
                // }}
                // transformOrigin={{
                //     vertical: 'top',
                //     horizontal: 'left',
                // }}
            >
                <MenuItem onClick={()=>{handleClose; window.location.pathname = "/"}}>Home</MenuItem>
                <MenuItem onClick={() => { handleClose; window.location.pathname = "/about-us" }}>{t('Chi siamo')}</MenuItem>
                <MenuItem onClick={() => { handleClose; window.location.pathname = "/contact-us" }}>{t('Contattaci')}</MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={()=>{handleClose; window.location.pathname = "/privacy-policy"}}>Privacy policy</MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem>
                    <Select
                    value={selectedLen}
                    onChange={(e)=>{
                        i18n.changeLanguage(e.target.value)
                        setSelectedLen(e.target.value)
                    }}
                    >
                        {allLen.map((option, key) => (
                            <MenuItem value={option.value} key={key}>
                                <img src={option.src} alt={option.label} />
                            </MenuItem>
                        ))}
                    </Select>
                </MenuItem>
            </Menu>
        </div>
    );
}