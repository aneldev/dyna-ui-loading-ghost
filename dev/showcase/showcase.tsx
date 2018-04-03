import * as React from 'react';
import {DynaLoadingGhost, IDynaLoadingGhostProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-ui-loading-ghost</h3>
        </div>
      ),
    },
    {
      slug: 'simple',
      faIconName: 'flask',
      title: 'simple loading',
	    description: 'loading in red background',
      center: true,
      component: (
      	<div className="demo-container">
		      <DynaLoadingGhost className="demo-loading-ghost"/>
	      </div>
      ),
      wrapperStyle:{
      	width: "100%",
	      height: "50%",
      },
    },
    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-loading-ghost">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-loading-ghost">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
