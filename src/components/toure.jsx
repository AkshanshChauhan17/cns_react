import { TourProvider, useTour } from "@reactour/tour";

const steps = [
    {
        selector: '.first',
        content: "THIS IS HOME STEP 1"
    },
    {
        selector: '.second',
        content: "THIS IS HOME STEP 2"
    },
    {
        selector: '.third',
        content: "THIS IS HOME STEP 3"
    },
]

const IM = ()=> {
    const {setIsOpen} = useTour();
    return <>
    <>
                <p className="first">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
                    finibus nulla, quis varius justo. Vestibulum lorem lorem, viverra porta
                    metus nec, porta luctus orci
                </p>
                <button onClick={() => setIsOpen(true)}>Open Tour</button>
            </>
            <>
                <p className="second">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
                    finibus nulla, quis varius justo. Vestibulum lorem lorem, viverra porta
                    metus nec, porta luctus orci
                </p>
                <button onClick={() => setIsOpen(true)}>Open Tour</button>
            </>
            <>
                <p className="third">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
                    finibus nulla, quis varius justo. Vestibulum lorem lorem, viverra porta
                    metus nec, porta luctus orci
                </p>
                <button onClick={() => setIsOpen(true)}>Open Tour</button>
            </>
        </>
}

export default function Toure() {
    return(
        <TourProvider steps={steps}>
            <IM />
        </TourProvider>
    )
}