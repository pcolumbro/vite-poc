import { Grid, Typography, Card, CardContent, Stack, Button, Box, TextField, InputLabel } from "@mui/material";
import { prettyPrintJson } from "pretty-print-json";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clear, populate, selectUser, update, updateEmail } from "../store/slice/user-slice";
import { User } from "../types/user/user";
import { toast } from "react-toastify";

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
};

const removeHtmlTags = (str: string) => {
    return str.replace(/<[^>]*>/g, '');
}

const UserDemo = () => {
    
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const [localUser, setLocalUser] = useState<User | null>(user);

    useEffect(() => {
        setLocalUser(user);
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(localUser === null) return;
        const { name, value } = e.target;
        const temp: User = {...localUser, [name]: value};
        setLocalUser(temp);
    };
    
    return(
        <Box sx={{padding: 4}}>
            <Typography variant="h3">User Proof of Concept</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
                                <Typography variant="h5">Actions</Typography>
                                <Button onClick={() => dispatch(populate())}>Populate User</Button>
                                <Button onClick={() => dispatch(clear())}>Clear User</Button>
                                <Stack spacing={2}>
                                    <Box>
                                        <InputLabel>Email</InputLabel>
                                        <TextField
                                            variant="outlined"
                                            value={localUser?.email ?? ''}
                                            onChange={handleChange}
                                            disabled={localUser === null}
                                            fullWidth
                                            name="email"
                                        />
                                    </Box>
                                    <Button 
                                        variant='contained'
                                        color='success'
                                        disabled={localUser === null}
                                        onClick={() => { localUser ? dispatch(update(localUser)) : toast.error('No user set.') }}
                                    >
                                            Save
                                    </Button>
                                </Stack>
                                
                                <Typography variant="h5" sx={{paddingTop: 10}}>Links</Typography>
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                    <Stack spacing={2}>
                                        <a style={linkStyle} href="https://github.com/pcolumbro/vite-poc" target="_blank">View Source</a>
                                    </Stack>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">User</Typography>
                            <pre>{user ? removeHtmlTags(prettyPrintJson.toHtml(user, {indent: 2, })) : 'No user set.'}</pre>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
export default UserDemo;