/// <reference path="../bundle.d.ts/main.d.ts" />

import * as sinonChai from 'sinon-chai';
import * as chai from 'chai';
import * as sinon from 'sinon';


chai.use(sinonChai);

let spy = sinon.spy();

spy();

chai.expect(spy).to.have.been.called;

let stub = sinon.stub();
chai.expect(stub).to.have.not.been.called;
stub('test');
chai.expect(stub).to.have.been.calledWith('test');

