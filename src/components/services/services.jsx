import Heading from "../ui/heading";
import Info from "./subcomponents/info";
import ServiceList from "./subcomponents/serviceList";
import Amenities from "../amenities/Amenities";
import Ota from "../otas/otas";
export default function Services(){
    return(
        <>
            <Amenities />
            <div className="py-5 lg:py-10">
                <Info/>
            </div>
            <div className="py-5 lg:py-10 mb-5 lg:mb-10">
                {/* <Heading text={"Services"}/> */}
                <ServiceList/>
            </div>
            <Ota/>
        </>
    )
}