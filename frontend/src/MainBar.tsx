import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "./User";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function MainBar() {
    const [user, setUser] = useState<User>({ id: "", name: "", totalSaving: -1 });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios
            .get("/api/user")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        if (location.pathname === "/" && location.state && location.state.refresh) {
            getUser();
        }
    }, [location]);

    return (
        <div className="MainBar">
            <Stack justifyContent="space-between" direction="row">
                <Button size="small" variant="contained" href="/">
                    Home
                </Button>
                {user && (
                    <p>
                        {user.name} - Total Saving: {user.totalSaving.toFixed(2)}
                    </p>
                )}
            </Stack>
        </div>
    );
}
