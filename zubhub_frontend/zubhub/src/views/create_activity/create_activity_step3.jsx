import React, {useState} from 'react'
import clsx from 'clsx';
import InputText from '../../components/inputText/inputText'
import 'react-toastify/dist/ReactToastify.css';
import {vars} from '../create_project/createProjectScripts'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CustomButton from '../../components/button/Button';
import projectStyles from '../../assets/js/styles/views/create_project/createProjectStyles';
import { styles } from '../../assets/js/styles/views/create_activity/createActivityStyles'
import commonStyles from '../../assets/js/styles';
import MaterialsUsed from '../../components/materialsUsed/materialsUsed'

const useProjectStyles = makeStyles(projectStyles);
const useStyles = makeStyles(styles);
const useCommonStyles = makeStyles(commonStyles);

function CreateActivityStep3(props) {
    const classes = useProjectStyles()
    const activity_classes = useStyles()
    const common_classes = useCommonStyles()
    const [newActivity, setNewActivity] = useState(props.newActivity)
    const [materialsUsedList, setMaterialsUsedList] = useState(newActivity.materialsUsed? newActivity.materialsUsed : ['','',''] ) 
    const {t} = {...props}

    const validateStep3 = () =>{
      props.handleSetState({step: 4, newActivity: newActivity})      
    }
    console.log('newActivity 2', newActivity)
  return (
    <div className={activity_classes.createActivityStepContainer}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} className={common_classes.marginTop1em}>
            <MaterialsUsed 
              classes={classes}
              common_classes={common_classes} 
              label={"materialsUsed"}
              fieldLabel={t('createActivity.inputs.materialsUsed.label')}
              addMoreLabel={t('createProject.inputs.materialsUsed.addMore')}
              encouragingText={t('createActivity.inputs.materialsUsed.encouragingText')}
              imagesLabel={t('createActivity.inputs.materialsUsed.images.label')} 
              inputOrder={4}
              materialsUsedList={materialsUsedList}
              setNewActivity={setNewActivity}
              t={t}
            />
          </Grid>
          <Grid item xs={12} className={common_classes.marginTop1em}>
              <InputText 
                classes={classes} 
                common_classes={common_classes}
                activity_classes={activity_classes}
                value={newActivity.FacilitationTips} 
                label={'FacilitationTips'}
                fieldLabel={t('createActivity.inputs.FacilitationTips.label')} 
                helperText={t('createActivity.inputs.FacilitationTips.helperText')} 
                placeholder={t('createActivity.inputs.FacilitationTips.placeholder')} 
                inputOrder={2}
                setValue={setNewActivity}
                vars={vars}
              />
            </Grid> 
          <Grid item xs={12} 
            className={clsx(
              common_classes.marginTop3em, 
              common_classes.marginBottom1em, 
              common_classes.displayFlex, 
              common_classes.justifyRight
              )}>
              <CustomButton
              variant="contained"
              primaryButtonStyle
              customButtonStyle
              size="small"
              onClick= {validateStep3} 
              >
              {t('createActivity.buttons.Next')}
              </CustomButton> 
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default CreateActivityStep3