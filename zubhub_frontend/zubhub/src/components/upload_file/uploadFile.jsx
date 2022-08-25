import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import ImageIcon from '@material-ui/icons/Image';
import MovieIcon from '@material-ui/icons/Movie';
import CustomButton from '../button/Button';
import {
  handleFileButtonClick,
  handleFileFieldChange,
  selectedFilesCount,
} from './uploadFileScripts.js';
import {
  Typography,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
} from '@material-ui/core';
import { getFieldAndIndex } from '../../assets/js/utils/scripts';

function UploadFile(props) {
  const {
    name,
    fileType,
    uploadButtonLabel,
    classes,
    activity_classes,
    countFilesText,
    multiple,
    newActivityObject,
    setNewActivityObject,
    formikProps,
    validateSteps,
    t,
  } = props;

  const { field, index } = getFieldAndIndex(name);
  const fileInputRef = React.useRef(null);
  const [filesUploaded, setFilesUploaded] = useState(false);

  const handleFileInputChange = () => {
    //if (fileType === 'image/*'){
    handleFileFieldChange(
      name,
      fileInputRef,
      formikProps,
      newActivityObject,
      setFilesUploaded,
      setNewActivityObject,
    );
    // }
  };
  return (
    <div>
      <CustomButton
        variant="outlined"
        size="large"
        margin="normal"
        id={`${name}_button`}
        startIcon={fileType === 'image/*' ? <ImageIcon /> : <MovieIcon />}
        onClick={() => handleFileButtonClick(fileInputRef, name)}
        secondaryButtonStyle
        mediaUploadButtonStyle
        customButtonStyle
        fullWidth
      >
        {uploadButtonLabel}
      </CustomButton>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        size="small"
        fullWidth
        margin="none"
      >
        <input
          ref={fileInputRef}
          className={classes.displayNone}
          aria-hidden="true"
          type="file"
          accept={fileType}
          id={`${name}_id`}
          name={name}
          multiple={multiple ? multiple : ''}
          onChange={() => handleFileInputChange()}
        />
        <Typography
          color="textSecondary"
          variant="caption"
          component="span"
          id={`${name}_file_count_el`}
        >
          {newActivityObject.mediaUpload?.fileFields[field] &&
            selectedFilesCount(
              field,
              index,
              newActivityObject.mediaUpload,
              countFilesText,
            )}
        </Typography>
        <FormHelperText error className={classes.fieldHelperTextStyle}>
          {index >= 0
            ? formikProps.touched[field] &&
              formikProps.errors[field] &&
              formikProps.touched[field][index] &&
              formikProps.errors[field][index] &&
              t(
                `createActivity.inputs.activityImages.errors.${formikProps.errors[field][index]}`,
              )
            : formikProps.touched[field] &&
              formikProps.errors[field] &&
              t(
                `createActivity.inputs.activityImages.errors.${formikProps.errors[field]}`,
              )}
        </FormHelperText>

        {newActivityObject.mediaUpload?.fileFields[field] && (
          <Grid container spacing={2}>
            {Object.entries(
              newActivityObject.mediaUpload?.fileFields[
                field
              ].imagesToPreview(),
            ).map(([index, image]) => (
              <Grid item key={`imagePreview${index}`} md={4} xs={6} sm={6}>
                <Paper
                  key={`imagePaper${index}`}
                  className={activity_classes.imagePreviewContainer}
                >
                  <img
                    className={activity_classes.imagePreview}
                    src={
                      image.type === 'file'
                        ? window.URL.createObjectURL(image.image)
                        : image.image.file_url
                    }
                    alt={`imageAlt${index}`}
                  />
                  <i
                    className={
                      'fas fa-times-circle ' + activity_classes.closeIcon
                    }
                  ></i>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </FormControl>
    </div>
  );
}

export default UploadFile;
