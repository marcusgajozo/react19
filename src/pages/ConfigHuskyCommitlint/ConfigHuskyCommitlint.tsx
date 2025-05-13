export const ConfigHuskyCommitlint = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">
        Config husky with commitlint in project react19
      </h1>
      <p className="mt-4 text-gray-600">
        This is a tutorial page to Husky configuration with Commitlint.
      </p>
      <section>
        <h2 className="text-xl font-bold mt-4">
          Step1: Install Husky and Commitlint
        </h2>
        <div className="bg-gray-200 p-2 mt-2">
          <code>
            yarn add -D @commitlint/cli @commitlint/config-conventional husky{" "}
            <br /># or <br />
            npm install -D @commitlint/cli @commitlint/config-conventional husky
          </code>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-4">Step2: Create file</h2>
        <div className="bg-gray-200 p-2 mt-2">
          <code>
            {`echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`}
          </code>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-4">Step3: Config husky</h2>
        <div className="bg-gray-200 p-2 mt-2">
          <code>npx husky init</code>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-4">
          Step4: Create file commit-msg
        </h2>
        <p>You can run code or you can create file manual</p>
        <div className="bg-gray-200 p-2 mt-2">
          <code>
            {`echo "yarn commitlint --edit $1" > ./.husky/commit-msg`}
          </code>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-4">Step5: Install commitizen</h2>
        <div className="bg-gray-200 p-2 mt-2">
          <code>
            yarn add commitizen -D <br /> # or <br /> npm i commitizen -D
          </code>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-4">Step5: Config commitizen</h2>
        <div className="bg-gray-200 p-2 mt-2">
          <code>
            # npm <br />
            npm run commitizen init cz-conventional-changelog --save-dev
            --save-exact
            <br /># yarn <br />
            yarn commitizen init cz-conventional-changelog --yarn --dev --exact
          </code>
        </div>
        <p className="mt-4">
          You need add in{" "}
          <span>
            <code>package.json</code>
          </span>
        </p>
        <div className="bg-gray-200 p-2 mt-2">
          <code>
            {JSON.stringify(
              {
                scripts: {
                  commit: "cz",
                },
              },
              null,
              2
            )}
          </code>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-4">Step6: Game over</h2>
        <div className="bg-gray-200 p-2 mt-2">
          <code>
            git add . <br />
            yarn cz <br />
            # or <br />
            npm run cz
          </code>
        </div>
      </section>
    </>
  );
};
