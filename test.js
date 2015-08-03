import assert from 'assert';
import { bindFirst, bindLast } from './module';

it('should make a function bindable', () => {
	const hasPropFirst = (data, prop) => !!data[prop];
	const hasPropLast = (prop, data) => !!data[prop];

  const hasThisFirst = hasPropFirst::bindFirst()
  const hasThisLast = hasPropLast::bindLast()

	const data = { id: 1, name: 'foo' };

	assert.strictEqual(data::hasThisFirst('name'), true);
	assert.strictEqual(data::hasThisFirst('nope'), false);

	assert.strictEqual(data::hasThisLast('name'), true);
	assert.strictEqual(data::hasThisLast('nope'), false);
});
