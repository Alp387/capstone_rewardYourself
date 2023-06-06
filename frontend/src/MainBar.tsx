import {Avatar, Button} from "@mui/material";
import {useEffect, useState} from "react";
import {User} from "./User";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./MainBar.css";

export default function MainBar() {
    const [user, setUser] = useState<User>({id: "", name: "", totalSaving: -1});
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

    function getInitials(name: string) {
        const nameArray = name.split(" ");
        const initials = nameArray
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase();
        return initials;
    }

    return (
        <div className="main-bar">
            <Button
                size="small"
                variant="contained"
                startIcon={<HomeIcon/>}
                href="/"
                className="home-button"
            ></Button>

                {user && (
                    <p>
                        <Avatar>{getInitials(user.name)}</Avatar>
                    </p>
                )}
                {user && (
                    <p>
                        Total Saving:{" "}
                        {user.totalSaving.toFixed(2)}
                    </p>
                )}
        </div>
    );
}
