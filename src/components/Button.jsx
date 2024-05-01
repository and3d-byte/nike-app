const Button = ({ label, iconUrl }) => {
    return (
        <button type="button" className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
            { label }
            {iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rouded-full w-5 h-5"/>}
        </button>
    )
}

export default Button