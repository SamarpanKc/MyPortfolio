import Image from "next/image"
import Logo from "@/app/images/logo.png";

const Footer = () => {
    return (
        <>
            <div className="container bg-oxfordBlue w-screen h-48 mt-32 flex font-noto justify-around items-center">
                <div className="details flex flex-col text-silver px-32">
                    <h1 className="font-extrabold text-3xl">Samarpan KC</h1>
                    <h1 className="font-medium text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam esse odit accusantium, tempora impedit distinctio dolor eos voluptatum, deleniti quisquam fugiat. Unde quae labore ex porro nostrum rerum! Facilis rem aut ipsa.</h1>
                </div>
                <div className="links flex flex-col text-silver px-32">
                    <h1>Facebook</h1>
                    <h1>Facebook</h1>
                    <h1>Facebook</h1>
                </div>
            </div>
        </>
    )
}
export default Footer