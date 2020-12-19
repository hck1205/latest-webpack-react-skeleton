import React, { useEffect } from 'react';

import rootStore, { RootStore } from 'stores';

type Props = {};

function Presenter({}: Props) {
  const { userStore }: RootStore = rootStore.useContainer();
  const { userName, setUserName } = userStore;

  useEffect(() => {}, []);

  return (
    <div>
      {userName}
      <button
        onClick={() => {
          setUserName('CkHong');
        }}
      >
        Click To Change
      </button>
    </div>
  );
}

export default Presenter;
