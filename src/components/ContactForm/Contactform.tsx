import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseSportName, chooseGenders, chooseGames, chooseSeason, chooseAges } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface ContactFormProps {
    id?:string;
    data?:{}
}

interface ContactState {
    sportname: string;
    genders: string;
    games: string;
    season: string;
    ages: string;
}

export const ContactForm = (props:ContactFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<ContactState>(state => state.sportname);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseSportName(data.sportname));
            dispatch(chooseGenders(data.genders));
            dispatch(chooseGames(data.games));
            dispatch(chooseSeason(data.season));
            dispatch(chooseAges(data.ages));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="sport">Sport Name</label>
                    <Input {...register('sport')} name="sport" placeholder='Sport'/>
                </div>
                <div>
                    <label htmlFor="genders">Genders</label>
                    <Input {...register('genders')} name="genders" placeholder='Genders'/>
                </div>
                <div>
                    <label htmlFor="games">Games</label>
                    <Input {...register('games')} name="games" placeholder='Games'/>
                </div>
                <div>
                    <label htmlFor="season">Season</label>
                    <Input {...register('season')} name="season" placeholder='Season'/>
                </div>
                <div>
                    <label htmlFor="ages">Ages</label>
                    <Input {...register('ages')} name="ages" placeholder='Ages'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}