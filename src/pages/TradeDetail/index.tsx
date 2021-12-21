import * as React from "react";
import { Avatar, Box, Grid, Typography, LinearProgress } from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import TradeAppBar from "./components/TradeAppBar";

const TradeDetail = (): JSX.Element => {
  return (
    <>
      <Box padding="20px">
        <Grid container>
          <Grid item xs={1}>
            <Avatar src="이미지 주소" sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">아이디</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">지역</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h6" color="primary">
                  36.6°C
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={4}>
                <SentimentSatisfiedIcon fontSize="large" color="primary" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <hr color="#dddddd" />
        <Typography variant="h4">물건 팝니다</Typography>
        <Box>
          물건 팝니다.
          <br />
          아주 싸게 팝니다.
        </Box>
      </Box>
      <TradeAppBar price={35000} isAdjustable={true} isInterest={false} />
    </>
  );
};

export default TradeDetail;
