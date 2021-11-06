import * as React from "react";
import SkillBar from "./skill-bar";

interface Props{
    logos: any[];
    skillLevel: number;
};

const skill: React.FC<Props> = ({ logos, skillLevel  }) => (
    <ul>
        <li>
            {logos.map(Logo => <Logo size={32} />)}
        </li>

        <li>
            <SkillBar skillLevel={skillLevel} />
        </li>
    </ul>
);

export default skill
