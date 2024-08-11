import { Home, Mail, Info, AccountTree } from '@mui/icons-material';
import {useState} from "react";
import {Box, Button, Drawer, ListItem, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const menu = [
    { title: 'ホーム', href: 'home.html', icon: Home },
    { title: '問い合わせ', href: 'contact.html', icon: Mail },
    { title: '会社概要', href: 'company.html', icon: Info },
    { title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree },
];

export default function MaterialDrawer() {
    const [show, setShow] = useState(false);
    const handelDraw = () => setShow(!show);

    return (
        <>
            <Button onClick={handelDraw}>ドローワー</Button>
            <Drawer anchor="left" open={show}>
                <Box sx={{ height: '100vh' }} onClick={handelDraw}>
                    <List>
                        {menu.map(obj => {
                            const Icon = obj.icon;
                            return (
                                <ListItem key={obj.title}>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon /></ListItemIcon>
                                        <ListItemText primary={obj.title} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}