import {Reward} from "./Reward";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "./RewardCard.css"

type RewardCardProps = {
    reward: Reward
}
export default function RewardCard(props: RewardCardProps) {
    const navigate = useNavigate()
    return (
        <Card className="reward-card">
            <CardContent sx={{
                display: "flex", alignItems: "center", maxWidth: "sm", maxHeight: "sm",
                flexDirection: "column", backgroundColor: "beige"
            }}>
                <Typography>
                    {props.reward.name}
                </Typography>
                <Typography>
                    Progress: {props.reward.savingAllocated} / {props.reward.price}€
                </Typography>
                <Button size="small" variant="text" onClick={() => {
                    navigate('/rewards/' + props.reward.id)
                }}>
                    Details
                </Button>
                <Button size="small" variant="text" onClick={() => {
                    navigate('/rewards/' + props.reward.id + '/spend', {state: props.reward})
                }}>
                    Spend Saving
                </Button>
            </CardContent>
        </Card>
    )
}