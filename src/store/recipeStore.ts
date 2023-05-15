const RecipeStore: RecipeeStateType = {
    balance: 1000000,
    showMessage: 'Message here ...'
};

export default RecipeStore

export type RecipeeStateType = {
    balance: number
    showMessage: string
}