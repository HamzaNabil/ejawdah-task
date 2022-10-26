import React from "react";
import { FormattedMessage } from "react-intl";

function ContentHeader({ title }) {
  return (
    <div className="content__header">
      <h2 className="content__header__title">
        <FormattedMessage id={title} defaultMessage={title} />
      </h2>
    </div>
  );
}

export default ContentHeader;
