import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/app';

expect.extend(expectJSX);


function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer,
  };
}

describe('App Component', () => {
  it('should show initial boilerplate text', () => {
    const { output } = setup();
    const expected = <div>Redux boilerplate</div>;
    expect(output).toIncludeJSX(expected);
  });
});
