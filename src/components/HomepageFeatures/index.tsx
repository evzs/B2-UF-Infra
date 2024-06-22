import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation d\'architecture',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Définition du périmètre et mise en oeuvre de l'architecture.
      </>
    ),
    link: "/docs/category/documentation-darchitecture"
  },
  {
    title: 'Documentation d\'exploitation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Maintenance et utilisation des différents services de la solution.
      </>
    ),
    link: "/docs/category/documentation-dexploitation"
  },
  {
    title: 'Gestion de projet',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pas toujours la partie la plus intéressante c'est sûr...
      </>
    ),
      link: "/docs/gestion-projet",
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
    return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
          <Link to={`${link}`}><Heading as="h3">{title}</Heading></Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
