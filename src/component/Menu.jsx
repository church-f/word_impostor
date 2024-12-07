import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from "react-i18next";
import Divider from '@mui/material/Divider';
import { Turn as Hamburger } from 'hamburger-react'

export default function PositionedMenu() {
    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Hamburger size={20} onToggle={(val)=>{setAnchorEl(val)}} toggled={anchorEl}/>
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
            </Menu>
        </div>
    );
}