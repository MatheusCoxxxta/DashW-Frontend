/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Project from '../../__mocks__/Project';
import colors from '../../constants/color';

const TaskList = (props) => (
  <Card {...props}>
    <CardHeader title="Tarefas do Projeto" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell>Tempo decorrido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Project.tasks.map((task, index) => (
              <TableRow hover key={index}>
                <TableCell>{task.descricao}</TableCell>
                <TableCell>{`${task.hora}h`}</TableCell>
                <TableCell>
                  <Chip
                    style={{
                      backgroundColor:
                        task.status === 'QA_TESTING'
                          ? colors.success
                          : task.status === 'QA_DEPLOYING'
                            ? colors.success
                            : null
                    }}
                    label={task.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default TaskList;
