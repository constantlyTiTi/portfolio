// 'use client'
import { Typography, Container, Card, List, ListItemText, ListItem, CardContent, Link, CardActions, AppBar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import Image from 'next/image'

export default function Home() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <AppBar position="static" sx={{ bgcolor: "Black"}}>
        <Container maxWidth="xl" sx={{display: { sm: 'block', md: "flex"}}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block', md: "flex" }, p:2 }}
          >Email:
            <a href="mailto:mycentryting@gmail.com">mycentryting@gmail.com</a>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block', md: "flex" }, p:2 }}
          ><Link href='Resume_TingLi.docx' download>Download resume</Link>
          </Typography>
        </Container>
      </AppBar>
      <Grid container spacing={2} md={8} xs={12}>
        <Grid item xs={12} md={6} lg={8}>
          <Typography variant="h2" component="div">
            Ting Li
          </Typography>

          <Typography variant="h5" component="div" color="text.secondary" sx={{ mt: 4 }}>
            a Software developer with robust background in full stack development
          </Typography>

          <Typography variant="h6" component="div" color="text.secondary" sx={{ mt: 4 }}>
            Hello, I am a software developer. I have cultivated extensive skills in database management, DevOps practices, website development, android application, and agil development methodologies.
          </Typography>

          <Typography variant="h6" component="div" color="text.secondary" sx={{ mt: 3 }}>
            Skills:
            <List sx={{ px: 2 }}>
              <ListItem disablePadding>
                <ListItemText primary="Spring boot, Java, Kotlin" /></ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Kubernetes, Splunk, Dynatrace" /></ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Kafka, Websocket, AWS" /></ListItem>
              <ListItem disablePadding>
                <ListItemText primary="React.js, NextJs" /></ListItem>
              <ListItem disablePadding>
                <ListItemText primary="ASP.Net, C#" /></ListItem>
              <ListItem disablePadding>
                <ListItemText primary="MySql, SQL, non-SQL" /></ListItem>
            </List>
          </Typography>
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4} sx={{ mt: 3 }}>
          <div style={{ height: '100%',width:'100%', position: 'relative' }}>
            <Image
              src="/developer-Img.jpg"
              layout='fill'
              alt="Picture of the author"
            />
          </div>
        </Grid> */}

      </Grid>

      <Grid container spacing={5} xs={12} md={8}>
        <Grid item xs={12} md={4}>
          <Card sx={{height:'100%'}}>
            <CardContent>
              <LaptopOutlinedIcon />
              <Typography variant="h5" component="div">
                Java Developer
              </Typography>
              <Typography variant="h7" color="text.secondary">
                Developed tools with Spring boot and React with MySql database to improve the rollout process, using of Maven and Docker to faciliate efficient project building and running.
                Used Git as my version control systems, and investigated bugs by using Splunk, Dynatrace, and Kubernetes.
              </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card sx={{height:'100%'}}>
            <CardContent>
              <AppShortcutOutlinedIcon />
              <Typography variant="h5" component="div">
                Software Developer
              </Typography>
              <Typography variant="h7" color="text.secondary">
                Developed Android Chat application in Kotlin, showcasing my expertise in AWS Amplify, AWS Coginito, and real-time features using AWS Kinesis WebRTC.
              </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card sx={{height:'100%'}}>
            <CardContent>
              <LaptopOutlinedIcon />
              <Typography variant="h5" component="div">
                Full Stack Developer
              </Typography>
              <Typography variant="h7" color="text.secondary">
                Developed patient booking appointment system by ASP.NET.Built UI functions by jQuery and Ajax such as creating or updating information without refreshing page and shifting partial views.
                Used Selenium to implement automation test suite that builds test scripts for patient portal, staff portal, dashboard, and critical projects
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Grid container spacing={5} xs={12} md={8}>
        <Grid item xs={12} md={4}>
          <Card style={{ width: '100%', position: 'relative' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Stock Watch
              </Typography>
              <Typography variant="h6" component="text.secondary">
                Latest personal project
              </Typography>
              <Typography variant="h7" color="text.secondary">
                <List>
                  <ListItem disablePadding>
                    <ListItemText primary="- Spring Boot + Apache Kafka" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="- Setup enovironment with Docker" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="- Next.js + React.js + Node.js + WebSocket" />
                  </ListItem>
                </List>
              </Typography>
            </CardContent>
            <CardActions>
              <Link size="small" href="https://github.com/constantlyTiTi/StockWatch">Learn More</Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </main>
  );
}
