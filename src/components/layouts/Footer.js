export  default function Footer (){
    return (
        <footer className="py-1">
            <p className="text-center text-dark mt-1">
            Car Rental - {new Date().getFullYear()}, All Rights Reserved &copy;
            </p>
        </footer>
    )
}