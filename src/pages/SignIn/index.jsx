import { useState } from "react";
import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input/index.jsx";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";
import { UseAuth } from "../../hooks/auth.jsx";

export const SainIn = () => {
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");

    const { signIn } = UseAuth();
    
    const handleSigIn = () => {
        signIn({ email, password }) 
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salver e gerenciar seus link úteis</p>

                <h2>Faça seu login</h2>
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSigIn}/>
                 
                <Link to="register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    );
};