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
import { setUpCommandList } from '../../steps/setup';
import * as given from '../../steps/1_given';
import * as when from '../../steps/2_when';
import * as then from '../../steps/3_then';

describe('list command', () => {
	beforeEach(setUpCommandList);
	Given('a query instance has been initialised', given.aQueryInstanceHasBeenInitialised, () => {
		Given('an action "list"', given.anAction, () => {
			Given('an options object', given.anOptionsObject, () => {
				Given('an unknown type "random"', given.anUnknownType, () => {
					Given('inputs "lightcurve" and "tosch"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should reject with message "Unsupported type."', then.itShouldRejectWithMessage);
						});
					});
				});
				Given('a type "account"', given.anUnknownType, () => {
					Given('inputs "13133549779353512613L" and "13133549779353512255L"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "accounts"', given.anUnknownType, () => {
					Given('inputs "13133549779353512613L" and "13133549779353512255L"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "address"', given.anUnknownType, () => {
					Given('inputs "13133549779353512613L" and "13133549779353512255L"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "addresses"', given.anUnknownType, () => {
					Given('inputs "13133549779353512613L" and "13133549779353512255L"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "block"', given.anUnknownType, () => {
					Given('inputs "3641049113933914102" and "3641049113933914999"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "blocks"', given.anUnknownType, () => {
					Given('inputs "3641049113933914102" and "3641049113933914999"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "delegate"', given.anUnknownType, () => {
					Given('inputs "lightcurve" and "tosch"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "delegates"', given.anUnknownType, () => {
					Given('inputs "lightcurve" and "tosch"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "transaction"', given.anUnknownType, () => {
					Given('inputs "16388447461355055139" and "16388447461355054444"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
				Given('a type "transactions"', given.anUnknownType, () => {
					Given('inputs "16388447461355055139" and "16388447461355054444"', given.inputs, () => {
						When('the action is called with the type, the inputs and the options', when.theActionIsCalledWithTheTypeTheInputsAndTheOptions, () => {
							Then('it should resolve to an array of query results', then.itShouldResolveToAnArrayOfQueryResults);
						});
					});
				});
			});
		});
	});
});
