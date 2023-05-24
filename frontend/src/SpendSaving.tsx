import {Button, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

type SpendSavingProps = {
    spendSaving: (id:string,spendingAmount:number) => void
}
export default function SpendSaving(props: SpendSavingProps) {
    const {state: reward} = useLocation()
    const id = reward.id
    const [spendingAmount, setSpendingAmount] = useState<number>(0)
    const navigate = useNavigate()

    function onSpendSaving(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.spendSaving(id,spendingAmount)
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={onSpendSaving}>
                <TextField
                    helperText="amount of spending"
                    id="spendingAmount"
                    type="number"
                    value={spendingAmount}
                    onChange={(event) => {
                        setSpendingAmount(Number(event.target.value))
                    }
                    }
                />

                <Button type="submit" variant="outlined" key="SpendSavingButton">spend saving</Button>
            </form>
        </div>)
}