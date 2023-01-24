import { Input, Textarea } from "../Form";
import { Button } from "../";
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from "react";

function ContactForm({ contactEmail }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        // send email
        window.open(
            `mailto:${contactEmail}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
                email
            )}): ${encodeURIComponent(message)}`
        );
    };

    return (
        <div className="flex flex-col w-full md:w-[48%] mb-6">
            <form onSubmit={submitForm}>
                <div className="flex flex-wrap justify-between">
                    <Input
                        required
                        name="name"
                        placeholder="Name"
                        className="w-full md:w-[48%]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        required
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full md:w-[48%]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Input
                    required
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <Textarea
                    required
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="button" className="block w-fit">
                    Sent Message
                    <AiOutlineMail />
                </Button>
            </form>
        </div>
    )
}

export default ContactForm