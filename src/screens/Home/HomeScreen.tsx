import React from 'react';
import {AppBackground} from "../../components/AppBackground/AppBackground";
import {ProfileHeader} from "./components/ProfileHeader";
import {VerticalSpacer} from "../../components/Spacers/VerticalSpacer";
import {RecipeList} from "./components/RecipeList";
import {NewRecipeList} from "./components/NewRecipes";

const HomeScreen = () => {
    const [username, setUsername] = React.useState('Jega');
    return (
        <AppBackground>
            <ProfileHeader username={username} />
            <VerticalSpacer />
            <RecipeList />
            <NewRecipeList />
        </AppBackground>
    );
};

export default HomeScreen;
