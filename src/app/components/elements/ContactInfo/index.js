
function ContactInfo({ email, phone, location, country, text }) {
    return (
        <div className="flex flex-col w-full md:w-[48%] my-8">
            <p className="w-5/6 text-[#696969]">{text}</p>
            <div className="mt-10 text-gray-300">
                <address className="font-medium block text-2xl md:text-3xl leading-8">
                    {location}
                    <span className="block">{country}</span>
                </address>
                <a href={`tel: ${phone}`} className="mt-5 block font-medium text-2xl md:text-3xl">{phone}</a>
                <a href={`mailto: ${email}`} className="mt-5 block">{email}</a>
            </div>
        </div>
    );
}

export default ContactInfo;