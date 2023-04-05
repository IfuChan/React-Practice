import { CardContainer, ContentContainer, ButtonContainer } from "./styles/Container.styles";
import { Tag, H1, P } from './styles/Elements';
import Button from "./Button";

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">Exclusive</Tag>
                <H1>React Styled Components</H1>
                <P>explcusive react hs tytorial on styled components where you will learn why we need this and how to use it.</P>
                <ButtonContainer>
                    <Button link="https://www.google.com" text=" watch now" />
                    <Button link="https://www.google.com" text=" Do  now" />
                </ButtonContainer>
            </ContentContainer>
            {/* <Image /> */}
        </CardContainer>
    );
}