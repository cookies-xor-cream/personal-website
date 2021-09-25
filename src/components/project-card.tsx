import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import * as styles from "./styles/project-card.module.scss";
type Props  = {
	projectDetails: Object;
};
	
const ProjectCard: React.FC<Props> = ({ projectDetails }: Props) => (
	<a href="/" className={styles.projectCard}>
		<div>
			Yay I got sass working!
		</div>
	</a>
);

export default ProjectCard;