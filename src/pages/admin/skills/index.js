import React from 'react';
import AddSkill from './addSkill';
import ShowSkills from './showSkills';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import EditSkill from './editSkill';

const SkillsAdmin = () => {
  return (
    <>
      <AddSkill />
      <Switch>
        <Route exact path="/admin/skills" component={ShowSkills} />
        <Route path="/admin/skills/:id" component={EditSkill} />
      </Switch>
    </>
  );
};
export default SkillsAdmin;
