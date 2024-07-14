import { Grid } from "react-loader-spinner";


const Loader = () =>  (
    <div className="flex justify-center items-center h-[400px]">
        <Grid
            visible={true}
            height="40"
            width="40"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
        />
    </div>
);

export default Loader;