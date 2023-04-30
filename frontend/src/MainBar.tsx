import {Button, Stack} from "@mui/material";

export default function MainBar() {

    return (
        <div className="MainBar">
            <Stack justifyContent="space-between" direction="row">
                <Button size="small" variant="contained" href="/">
                    Home
                </Button>
            </Stack>
        </div>

    )
}