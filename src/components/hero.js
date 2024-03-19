//
// export default function Hero() {
//     return (
//         <section className="hero h-full py-32 imag3">
//
//                 <div className={"flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5"}>
//                     <div className="text-white font-bold text-center z-10">
//                         SERC
//                     </div>
//
//                     <div className="absolute top-0 left-0 right-0 bottom-0">
//
//
//                     </div>
//                 </div>
//         </section>
//     )
// }

import {BackgroundBeams} from "@/components/ui/background-beams";

export default function Hero() {
    return (
        <section className="hero h-full relative overflow-hidden">
        {/*<section className="hero h-full py-32 relative overflow-hidden">*/}
        {/*    <div className="relative h-full w-full bg-black">*/}
        {/*        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>*/}
        {/*        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>*/}
        {/*    </div>*/}

            {/*<div className="relative h-full w-full bg-slate-950">*/}
            {/*    <div*/}
            {/*        className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>*/}
            {/*</div>*/}

            {/*<div className="relative h-full w-full bg-slate-950">*/}
            {/*    <div*/}
            {/*        className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>*/}
            {/*    <div*/}
            {/*        className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>*/}
            {/*</div>*/}

            {/*<div*/}
            {/*    className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">*/}
            {/*    <div*/}
            {/*        className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>*/}
            {/*</div>*/}

            <div className="relative h-full w-full bg-slate-950">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>



            <div className="flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5 relative z-10 pt-20">
                <div className="text-white font-bold text-center text-[20rem]">
                    SERC
                </div>
            </div>

            <BackgroundBeams />

        </section>
    )
}