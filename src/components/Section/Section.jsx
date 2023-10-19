import { SectionBox } from "./Section.styled";
import { Title } from "./Title/Title";

export const Section = ({title, item, children}) => {
    return (
        <SectionBox>
            <Title item={item} title={title}/>
                {children}
        </SectionBox>
    );
};