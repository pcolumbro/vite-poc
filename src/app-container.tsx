import UserDemo from "./features/user-demo";
import { useGetPokemonByNameQuery } from "./store/api/api";

function App() {

    const { data, isLoading, isSuccess, isError } = useGetPokemonByNameQuery('pikachu');

    console.log('isLoading', isLoading);
    console.log('isSuccess', isSuccess);
    console.log('isError', isError);
    console.log('data', data);

    return (
        <UserDemo />
    );
}
export default App;
