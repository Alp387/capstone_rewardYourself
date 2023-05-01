import {FormEvent, useState} from "react";
import {NewReward} from "./Reward";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";

type AddRewardProps = {
    addReward: (newReward: NewReward) => void
}

export default function AddRecipe(props: AddRewardProps) {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const navigate = useNavigate()

    function onSaveReward(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newReward: NewReward = {name: name, description: description, price: price}
        axios.post("/api/rewards/add", newReward)
            .catch(() => console.error("post on /api/rewards/add not successful"))
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={onSaveReward}>
                <TextField
                    helperText="name of your reward"
                    id="rewardName"
                    label="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }
                    }
                />
                <TextField
                    helperText="describe your reward"
                    id="rewardDescription"
                    label="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }
                    }
                />
                {/* <TextField
                        helperText="price of your reward"
                        id="rewardPrice"
                        label="Price"
                        value={price}
                        onChange={(event)=>{setPrice(event.target.)}
                        }
                    />*/}
                <Button key="RewardAddButton">Add Reward</Button>
            </form>
        </div>
    )

}
