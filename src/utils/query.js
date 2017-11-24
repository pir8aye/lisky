/*
 * LiskHQ/lisky
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import liskAPIInstance from './api';

class Query {
	constructor() {
		this.client = liskAPIInstance;
		this.handlers = {
			account: (account, options) => this.getAccount(account, options),
			block: (block, options) => this.getBlock(block, options),
			delegate: (delegate, options) => this.getDelegate(delegate, options),
			transaction: (transaction, options) => this.getTransaction(transaction, options),
		};
	}

	sendRequest(endpoint, parameters, { testnet } = {}) {
		const originalTestnetSetting = this.client.testnet;
		const overrideTestnetSetting = typeof testnet === 'boolean' && this.client.testnet !== testnet;
		const reset = (result) => {
			if (overrideTestnetSetting) this.client.setTestnet(originalTestnetSetting);
			return result;
		};

		if (overrideTestnetSetting) this.client.setTestnet(testnet);

		return this.client.sendRequest(endpoint, parameters)
			.then(reset, reset);
	}

	getBlock(input, options) {
		return this.sendRequest('blocks/get', { id: input }, options);
	}

	getAccount(input, options) {
		return this.sendRequest('accounts', { address: input }, options);
	}

	getTransaction(input, options) {
		return this.sendRequest('transactions/get', { id: input }, options);
	}

	getDelegate(input, options) {
		return this.sendRequest('delegates/get', { username: input }, options);
	}
}

export default new Query();
