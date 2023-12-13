import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./style.js";
import { Header } from "../../components/Header/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Note } from "../../components/Note/index.jsx";


export const Home = () => {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText tilte="Todos" isActive/>
        </li>
        <li>
          <ButtonText tilte="React" />
        </li>
        <li>
          <ButtonText tilte="NodeJS" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={ FiSearch }/>
      </Search>

      <Content>
          <Section title="Minhas Notas">
            <Note data={{ title: 'React', 
            tags: [
              { id: '1', name: 'react'  }, 
              { id: '1', name: 'nestjs' },
            ] 
            }}/> 
          </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
};
