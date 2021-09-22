const parseDirectory = require('../parseDirectory');

describe("parseDirectory function", () => {
	const log = console.log;
	beforeEach(() => {
		console.log = jest.fn();

	});

	afterAll(() => {
		console.log = log;
	});

	it('should not print anything in the terminal', () => {
		parseDirectory(process.cwd() + '/tests/test0');
		expect(console.log).not.toHaveBeenCalled();
	});

	it('should print the 2 paths to function1.js and Apple.js', () => {
		const testFolder1Path = process.cwd() + '/tests/test1'
		parseDirectory(testFolder1Path);
		expect(console.log).toHaveBeenCalled();

		const output = console.log.mock.calls;
		const line1 = output[0][0];
		const line2 = output[1][0];
		expect(output.length).toBe(2);
		expect(line1.includes('function1.js')).toBeTruthy();
		expect(line2.includes('Apple.js')).toBeTruthy();
	});

	it('should print the 2 paths to component.tsx and ipsumCopy.js', () => {
		const testFolder2Path = process.cwd() + '/tests/test2'
		parseDirectory(testFolder2Path);
		expect(console.log).toHaveBeenCalled();

		const output = console.log.mock.calls;
		const line1 = output[0][0];
		const line2 = output[1][0];
		expect(output.length).toBe(2);
		expect(line1.includes('component.tsx')).toBeTruthy();
		expect(line2.includes('ipsumCopy.js')).toBeTruthy();
	});

	it('should log the message that there are no files in the executing directory when the directory is empty', () => {
		const testFolder3Path = process.cwd() + '/tests/test3'
		parseDirectory(testFolder3Path);
		expect(console.log).toHaveBeenCalled();

		const output = console.log.mock.calls;
		const line1 = output[0][0];
		expect(line1).toBe(`${testFolder3Path} does not contain files.`);
	});

	it('should log the message that there are no files in all the folders when the directory and its subfolders are empty', () => {
		const testFolder4Path = process.cwd() + '/tests/test4'
		parseDirectory(testFolder4Path);
		expect(console.log).toHaveBeenCalled();

		const output = console.log.mock.calls;
		const line1 = output[0][0];
		expect(line1).toBe(`${testFolder4Path}/subfolder4/subfolder4-1 does not contain files.`);
	});
});