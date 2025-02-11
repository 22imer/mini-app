import React from "react";
import { followOA } from "zmp-sdk/apis";
import { useSnackbar, Button, Box } from "zmp-ui";

// Functional component
const FollowOAButton: React.FC<{ oaId: string }> = ({ oaId }) => {
  const { openSnackbar } = useSnackbar();

  const handleFollow = () => {
    followOA({
      id: oaId,
      success: () => {
        openSnackbar({
          text: "Followed successfully!",
          type: "success",
        });
      },
      fail: (err) => {
        openSnackbar({
          text: `Error: ${err.message || "Failed to follow"}`,
          type: "error",
        });
      },
    });
  };

  return (
    <Box mt={2}>
      <Button fullWidth variant="secondary" onClick={handleFollow}>
        Kết nối ngay
      </Button>
    </Box>
  );
};

export default FollowOAButton;
