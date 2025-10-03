interface Props {
    number: number;
    step: string;
    desc: string;
}
const StepsCard = ({ step, desc, number }: Props) => {
    return (
        <section className="px-5 relative">
            <div className="text-9xl opacity-60 top-0 backdrop-blur-3xl absolute z-10 font-bold text-white left-0">
                {number}
            </div>
            <div className="relative z-30">
                <h1 className="text-3xl text-white font-bold py-4 font-sans">
                    {step}
                </h1>
                <p className="text-gray-800">{desc}</p>
            </div>
        </section>
    );
};

export default StepsCard;
