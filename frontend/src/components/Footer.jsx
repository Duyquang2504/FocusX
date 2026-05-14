import React from "react";

const Footer = ({ completedTaskCount = 0, activeTaskCount = 0 }) => {
  return (
    <>
      {completedTaskCount + activeTaskCount > 0 ? (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                🎉 Quá tốt! Bạn đã hoàn thành {completedTaskCount} nhiệm vụ
                {activeTaskCount > 0 &&
                  `, còn ${activeTaskCount} nhiệm vụ. Làm thôi nào!`}
              </>
            )}
            {completedTaskCount === 0 && activeTaskCount > 0 && (
              <>Hãy bắt đầu với {activeTaskCount} nhiệm vụ 💪</>
            )}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            🚩 Bạn chưa có nhiệm vụ nào
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
