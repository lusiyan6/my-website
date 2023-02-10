import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Take immediate action',
    Svg: require('@site/static/img/ok.svg').default,
    description: (
      <>
        Activity is the only road to knowledge.
      </>
    ),
  },
  {
    title: 'Try to keep',
    Svg: require('@site/static/img/hope.svg').default,
    description: (
      <>
        文档里会放一些面试题，
        博客是个人的一些零碎的记录，
        笔记有什么错误请加我微信：13143546844，
        菜鸡求大佬带带ヽ(✿ﾟ▽ﾟ)ノ
      </>
    ),
  },
  {
    title: 'Focus on yourself',
    Svg: require('@site/static/img/plan.svg').default,
    description: (
      <>
        The future is scary but you can’t just run to the past cause it’s familiar.
      </>
    ),
  },
  /*{
    title:"个人介绍",
    SVG:require("@site/static/img/undraw_docusaurus_react.svg").default,
    description:(
      <>
        哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或
      </>
    )
  }*/
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
