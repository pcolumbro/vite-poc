import { Grid, Typography, Card, CardContent, Stack, Button, Box } from "@mui/material";
import { prettyPrintJson } from "pretty-print-json";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
};

const UserDemo = () => {
    
    const removeHtmlTags = useCallback((str: string) => {
        return str.replace(/<[^>]*>/g, '');
    }, []);
    
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.value);

    let display = 'No user set.';
    if(user) {
        display = removeHtmlTags(prettyPrintJson.toHtml(user, {indent: 2, }));
    }
    
    return(
        <Box sx={{padding: 4}}>
            <Typography variant="h3">User Proof of Concept</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack sx={{display: 'flex', justifyContent: 'center'}}>
                                <Typography variant="h5">Actions</Typography>
                                <Button onClick={() => dispatch({ type: 'user/populate' })}>Populate User</Button>
                                <Button onClick={() => dispatch({ type: 'user/clear' })}>Clear User</Button>
                                <Typography variant="h5" sx={{paddingTop: 5}}>Links</Typography>
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
                            <pre>{display}</pre>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
export default UserDemo;