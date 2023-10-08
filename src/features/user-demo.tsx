import { Grid, Typography, Card, CardContent, Stack, Button, Box } from "@mui/material";
import { User } from "../types/user/user";
import { prettyPrintJson } from "pretty-print-json";
import { generateMockUser } from "../mock/user-repo";

const UserDemo = () => {

    const user = generateMockUser();
    const formattedUser = prettyPrintJson.toHtml(user);

    return(
        <Box sx={{padding: 2}}>
            <Typography variant="h2">User Proof of Concept</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack>
                                <Typography variant="h3">Actions</Typography>
                                <Button onClick={() => console.log('mock login')}>Mock Login</Button>
                                <Button onClick={() => console.log('mock logout')}>Mock Logout</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">User</Typography>
                            <div dangerouslySetInnerHTML={{__html: formattedUser}}></div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
export default UserDemo;